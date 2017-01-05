from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^categoryes/', include('category.urls')),
    url(r'^rest-auth/', include('rest_auth.urls')),
]
