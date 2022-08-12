from django.contrib import admin
from django.contrib.staticfiles.storage import staticfiles_storage
from django.views.generic.base import RedirectView
from django.urls import path, include


urlpatterns = [
    path('favicon.ico', RedirectView.as_view(url=staticfiles_storage.url('logos/favicon.ico'))),
    path('admin/', admin.site.urls),
    path('inout/', include('inout.urls')),
    path('products/', include('products.urls')),
]
