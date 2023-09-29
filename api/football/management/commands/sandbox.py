from django.core.management.base import BaseCommand
from football.models import Multipliers


class Command(BaseCommand):
    def add_arguments(self, parser):
        ...

    def handle(self, *args, **options):
        # Multipliers.objects.create(role="Forward", multipliers={
        #     "Goals": 1.1,
        #     "Assists": 1.08,
        #     "Penalty Miss(Attempt - Made)": 0.96,
        #     "Yellow Card": 0.999,
        #     "Red Card": 0.95,
        #     "Touches": 1.0002,
        #     "Tackles": 1.0007,
        #     "Interception": 1.0008,
        #     "Blocks": 1.0006,
        #     "SCA": 1.0015,
        #     "GCA": 1.0032,
        # })
        # Multipliers.objects.create(role="Midfield", multipliers={
        #     "Goals": 1.08,
        #     "Assists": 1.1,
        #     "Penalty Miss(Attempt - Made)": 0.96,
        #     "Yellow Card": 0.999,
        #     "Red Card": 0.95,
        #     "Touches": 1.0003,
        #     "Tackles": 1.0008,
        #     "Interception": 1.0009,
        #     "Blocks": 1.0008,
        #     "SCA": 1.0015,
        #     "GCA": 1.004,
        # })
        # Multipliers.objects.create(role="Defender", multipliers={
        #     "Goals": 1.06,
        #     "Assists": 1.8,
        #     "Penalty Miss(Attempt - Made)": 0.96,
        #     "Yellow Card": 0.999,
        #     "Red Card": 0.95,
        #     "Touches": 1.0002,
        #     "Tackles": 1.001,
        #     "Interception": 1.002,
        #     "Blocks": 1.002,
        #     "SCA": 1.001,
        #     "GCA": 1.0025,
        # })
        data = Multipliers.objects.all()
        for item in data:
            print(item)
