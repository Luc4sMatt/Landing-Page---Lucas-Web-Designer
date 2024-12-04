import os
import psycopg2
from psycopg2 import sql

def get_data():
    # Obter a URL do banco de dados a partir das variáveis de ambiente
    database_url = os.getenv("DATABASE_URL")

    # Conectar ao banco de dados
    try:
        connection = psycopg2.connect(database_url)
        cursor = connection.cursor()

        # Executar uma consulta SQL
        query = sql.SQL("SELECT * FROM your_table_name")  # Substitua pelo seu nome de tabela
        cursor.execute(query)

        # Obter os resultados
        data = cursor.fetchall()

        return data

    except Exception as e:
        print("Erro ao conectar ao banco de dados:", e)
        return None

    finally:
        # Fechar o cursor e a conexão
        if cursor:
            cursor.close()
        if connection:
            connection.close()

# Exemplo de uso
if __name__ == "__main__":
    results = get_data()
    if results:
        for row in results:
            print(row)