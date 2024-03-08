#include <stdio.h>

int isFibonacci(int num)
{
    int a = 0, b = 1, c;

    while (c <= num)
    {
        if (c == num)
        {
            return 1;
        }
        c = a + b;
        a = b;
        b = c;
    }

    return 0;
}

int main()
{
    int numero;

    printf("Informe um número: ");
    scanf("%d", &numero);

    if (isFibonacci(numero))
    {
        printf("%d pertence à sequência de Fibonacci.\n", numero);
    }
    else
    {
        printf("%d não pertence à sequência de Fibonacci.\n", numero);
    }

    return 0;
}