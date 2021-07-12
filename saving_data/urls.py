from django.urls import path
from .views import HomePage, SaveInfoView, DisplayInfoView

urlpatterns = [
    path('', HomePage.as_view(), name='home'),
    path('save_info', SaveInfoView.as_view(), name='save'),
    path('display_info', DisplayInfoView.as_view(), name='all_information'),
]
