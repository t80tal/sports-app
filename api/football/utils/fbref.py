import requests
from bs4 import BeautifulSoup
from openpyxl import Workbook
from bs4.element import Tag


def scrape_fbref_players(players_urls, file_id):
    workbook = Workbook()
    for player_url in players_urls:
        page = requests.get(player_url)
        soup = BeautifulSoup(page.text, 'lxml')
        table1 = soup.find('table')
        rows = table1.find_all('tr')
        data = []

        for row in rows:
            row_data = []

            is_empty_row = list(row)[0].text == ""
            if is_empty_row:
                continue

            for column in row:
                if column == '\n':
                    continue
                if len(data) == 0:
                    row_data.append("")
                elif isinstance(column, Tag):
                    if column.has_attr('data-stat') and len(data) == 1:
                        row_data.append(column['data-stat'])
                    else:
                        row_data.append(column.text)
                else:
                    row_data.append(column)
            data.append(row_data)

        generate_sheet(workbook, player_url.split("/")[-1], data)
    workbook.remove(workbook.active)
    workbook.save(f'result_{file_id}.xlsx')


def generate_sheet(workbook, sheet_name, data):
    sheet = workbook.create_sheet(title=sheet_name)
    for row in data:
        sheet.append(row)


if __name__ == '__main__':
    for years in ["2022-2023"]:
        players_urls = (f"https://fbref.com/en/players/819b3158/matchlogs/2022-2023/c8/Ilkay-Gundogan-Match-Logs",
                        f"https://fbref.com/en/players/b0b4fd3e/matchlogs/2022-2023/c8/Jack-Grealish-Match-Logs",
                        f"https://fbref.com/en/players/31c69ef1/matchlogs/2022-2023/c8/Ruben-Dias-Match-Logs",
                        f"https://fbref.com/en/players/6434f10d/matchlogs/2022-2023/c8/Rodri-Match-Logs",
                        "https://fbref.com/en/players/3bb7b8b4/matchlogs/2022-2023/c8/Ederson-Match-Logs",
                        "https://fbref.com/en/players/1f44ac21/matchlogs/2022-2023/c8/Erling-Haaland-Match-Logs",
                        "https://fbref.com/en/players/89ac64a6/matchlogs/2022-2023/c8/Manuel-Akanji-Match-Logs",
                        "https://fbref.com/en/players/3eb22ec9/matchlogs/2022-2023/c8/Bernardo-Silva-Match-Logs",
                        "https://fbref.com/en/players/e46012d4/matchlogs/2022-2023/c8/Kevin-De-Bruyne-Match-Logs",
                        "https://fbref.com/en/players/5eecec3d/matchlogs/2022-2023/c8/John-Stones-Match-Logs",
                        "https://fbref.com/en/players/eaeca114/matchlogs/2022-2023/c8/Nathan-Ake-Match-Logs",
                        "https://fbref.com/en/players/892d5bb1/matchlogs/2022-2023/c8/Riyad-Mahrez-Match-Logs",
                        "https://fbref.com/en/players/bd6351cd/matchlogs/2022-2023/c8/Joao-Cancelo-Match-Logs",
                        "https://fbref.com/en/players/15ab5a2b/matchlogs/2022-2023/c8/Julian-Alvarez-Match-Logs",
                        "https://fbref.com/en/players/01e5f06e/matchlogs/2022-2023/c8/Sergio-Gomez-Match-Logs",
                        "https://fbref.com/en/players/ed1e53f3/matchlogs/2022-2023/c8/Phil-Foden-Match-Logs",
                        "https://fbref.com/en/players/119b9a8e/matchlogs/2022-2023/c8/Aymeric-Laporte-Match-Logs",
                        "https://fbref.com/en/players/86dd77d1/matchlogs/2022-2023/c8/Kyle-Walker-Match-Logs",
                        "https://fbref.com/en/players/c1242d4e/matchlogs/2022-2023/c8/Stefan-Ortega-Match-Logs",
                        "https://fbref.com/en/players/dc7f8a28/matchlogs/2022-2023/c8/Cole-Palmer-Match-Logs",
                        "https://fbref.com/en/players/b57e066e/matchlogs/2022-2023/c8/Rico-Lewis-Match-Logs",
                        "https://fbref.com/en/players/c19a2df1/matchlogs/2022-2023/c8/Josh-Wilson-Esbrand-Match-Logs",
                        "https://fbref.com/en/players/4f565d77/matchlogs/2022-2023/c8/Kalvin-Phillips-Match-Logs",
                        )
        scrape_fbref_players(players_urls, years)
