original = [(1,3),(3,5),(5,7)]


def somador_tuplas_lista(tupla_Lista):
  soma = []
  for tupla in range(len(tupla_Lista)):
    soma.append(sum(tupla_Lista[tupla]))

  return soma


print(somador_tuplas_lista(original))



