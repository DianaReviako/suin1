from django.shortcuts import render


def home_page(request):
    return render(request, 'input_of_info.html')
