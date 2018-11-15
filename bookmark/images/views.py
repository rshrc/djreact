from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from .forms import ImageCreationForm


# Create your views here.

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
