#include <stdio.h>
#include <string.h>

void inverterString(char str[])
{
    int inicio = 0;
    int fim = strlen(str) - 1;

    while (inicio < fim)
    {

        char temp = str[inicio];
        str[inicio] = str[fim];
        str[fim] = temp;

        inicio++;
        fim--;
    }
}

int main()
{
    char minhaString[] = "Exemplo";

    printf("String original: %s\n", minhaString);

    inverterString(minhaString);

    printf("String invertida: %s\n", minhaString);

    return 0;
}