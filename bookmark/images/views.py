from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.shortcuts import render, redirect

from .forms import ImageCreationForm
from .models import Image


# Create your views here.

def image_detail(request, id, slug):
    image = get_object_or_404(Image, id=id, slug=slug)
    return render(request, 'images/image/detail.html', {'section': 'images', 'image': image})


@login_required
def image_create(request):
    if request.method == 'POST':
        # form is sent
        form = ImageCreationForm(data=request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            new_item = form.save(commit=False)

            # assign current user to the item
            new_item.user = request.user
            new_item.save()
            messages.success(request, 'Image added successfully')

            # redirect to the new created item detail view
            return redirect(new_item.get_absolute_url())
    else:
        # build the form with the data provided
        form = ImageCreationForm(data=request.GET)

    return render(request, 'images/image/create.html', {'section': 'images', 'form': form})
