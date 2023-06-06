# Caixa Eletrônico API

## Endpoints

## Depositar

``` bash
POST /v1/conta/depositar/
```

### Requisição

```json
{
    valor: 10.00 (min.: 0.1, max: 10^3)
}
```

## Sacar

```bash
POST /v1/conta/sacar/
```

### Requisição

```json
{
    valor: 10.00 (min: 1  e max <= saldo da conta)
}
```

## Extrato

```bash
GET /v1/conta/extrato/
```

### Response

```json
{
    registros: [
        {
            id: 1,
            data: "2023-06-06",
            tipo: "Depósito",
            valor: 50.0
        },
        {
            id: 2,
            data: "2023-06-06",
            tipo:E "Depósito",
            valor: 50.0
        }
    ]
}
```

## Saldo

```bash
GET /v1/conta/saldo
```

### Response

```json
{
    saldo: 1000.00
}
```