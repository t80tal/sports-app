from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.urls import path
from football.models import Multipliers
from football.utils.fbref import scrape_fbref_players


@api_view(['GET', 'POST'])
def configuration_api(request) -> Response:
    if request.method == 'GET':
        data = Multipliers.objects.all()
        return Response(list(data.values()))
    if request.method == 'POST':
        print("asdasd")
        return Response([])


@api_view(['POST'])
def analytics_api(request) -> Response:
    fbref_url = request.data.get('fbref_url')
    scrape_fbref_players((fbref_url,), 1)

    return Response({"test": "test"})


configuration_urls = [
    path('', configuration_api),
]

analytics_urls = [
    path('generate/', analytics_api),
]
