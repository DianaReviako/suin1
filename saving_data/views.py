from django.shortcuts import redirect, render
from django.views.generic import TemplateView, CreateView
from .models import InfoFromUser


class HomePage(TemplateView):
    """Returns a template with a form for receiving data from the user"""
    template_name = 'input_of_info.html'


class SaveInfoView(CreateView):
    """The data received from the request is written to the model InfoFromUser"""
    model = InfoFromUser

    def post(self, request, *args, **kwargs):
        dict_with_info_from_user = {key: value for key, value in request.POST.items() if key.startswith('input_name')}
        InfoFromUser.objects.create(info=dict_with_info_from_user)
        return redirect('all_information')


class DisplayInfoView(TemplateView):
    """The data received from the model are passed to the context for display in the template"""
    template_name = 'see_saved_information.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        all_saved_info = InfoFromUser.objects.all()
        context['all_saved_info'] = all_saved_info
        return context
