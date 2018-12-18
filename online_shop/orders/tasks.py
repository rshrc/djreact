from celery import task
from django.core.mail import send_mail

from .models import Order


@task
def order_created(order_id):
    """
    Task to send an email notification when an order
    is successfully created
    :param order_id:
    :return:
    """
    order = Order.objects.get(id=order_id)
    subject = 'Order no. {}'.format(order.id)
    message = 'Dear {}, \n\nYou have successfully placed an order. \n Your order id is {}.'.format(order.first_name,
                                                                                                   order.id)

    mail_sent = send_mail(subject, message, 'admin@onlineshop.com', [order.email])
    return mail_sent
