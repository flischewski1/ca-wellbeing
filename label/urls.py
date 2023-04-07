from . import views
from django.urls import include, path


urlpatterns = [

    path('1/', views.group1, name='group1'),

   
]