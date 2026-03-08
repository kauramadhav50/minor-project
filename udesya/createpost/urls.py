from django.urls import path
from .views import user_list, signup

urlpatterns = [
    path('users/', user_list),
    path('signup/', signup)
]