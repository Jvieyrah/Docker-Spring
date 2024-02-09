filtros = {
  page: 3,
  nunItems: 50,
  id: "desc",
}

function recebeFiltroseretornaumaquery(filtros) {
  const TableName = "tabela"
  let query = `SELECT * FROM ${TableName}`;
  if (filtros.page && filtros.nunItems) {
    query += ` LIMIT ${filtros.nunItems} OFFSET ${filtros.page * filtros.nunItems - filtros.nunItems}`
  }

  for (const filtro in filtros) {
    // se o nome do filtro não for page e nem nunItems ele será o sort
    if (filtro !== "page" && filtro !== "nunItems") {
      query += ` ORDER BY ${filtro} ${filtros[filtro] === "desc" ? "DESC" : "ASC"}`
    }
  }
  return query
}

console.log(recebeFiltroseretornaumaquery(filtros))