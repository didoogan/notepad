from django.conf.urls import url

from .views import CategoryList, CategoryRetrieveUpdateDestroyView


urlpatterns = [
    url(r'^$', CategoryList.as_view(), name='list_view'),
    url(r'^(?P<pk>\d+)/$', CategoryRetrieveUpdateDestroyView.as_view(), name='list_view'),
]
