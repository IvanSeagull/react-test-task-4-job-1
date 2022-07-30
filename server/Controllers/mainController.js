const pool = require('../db');

function createWhereClause(filterColumn, filterCondition, filterValue) {
  if (!filterColumn || !filterCondition || !filterValue) {
    return '';
  }
  let sql = '';

  switch (filterColumn) {
    case 'date':
      switch (filterCondition) {
        case 'include':
          sql = `WHERE to_char(date::timestamp, 'YYYY-MM-DD') like '%${filterValue}%'`;
          break;
        case 'equal':
          sql = `WHERE DATE(date) = to_date('${filterValue}', 'YYYY-MM-DD')`;
          break;
        case 'less':
          sql = `WHERE DATE(date) < to_date('${filterValue}', 'YYYY-MM-DD')`;
          break;
        case 'more':
          sql = `WHERE DATE(date) > to_date('${filterValue}', 'YYYY-MM-DD')`;
          break;
        default:
          break;
      }
      break;
    case 'distance':
      switch (filterCondition) {
        case 'include':
          sql = `WHERE distance::text like '%${filterValue}%'`;
          break;
        case 'equal':
          sql = `WHERE distance = ${filterValue}`;
          break;
        case 'less':
          sql = `WHERE distance < ${filterValue}`;
          break;
        case 'more':
          sql = `WHERE distance > ${filterValue}`;
          break;
        default:
          break;
      }
      break;
    case 'amount':
      switch (filterCondition) {
        case 'include':
          sql = `WHERE amount::text like '%${filterValue}%'`;
          break;
        case 'equal':
          sql = `WHERE amount = ${filterValue}`;
          break;
        case 'less':
          sql = `WHERE amount < ${filterValue}`;
          break;
        case 'more':
          sql = `WHERE amount > ${filterValue}`;
          break;
        default:
          break;
      }
      break;
    default:
      switch (filterCondition) {
        case 'include':
          sql = `WHERE name like '%${filterValue}%'`;
          break;
        case 'equal':
          sql = `WHERE name like '${filterValue}'`;
          break;
        default:
          break;
      }
      break;
  }

  return sql;
}

function createSortClause(sortBy, sortType) {
  console.log(sortBy, sortType);
  if (sortType !== 'asc' && sortType !== 'desc') return '';
  let sql = `ORDER BY ${sortBy} ${sortType} `;
  console.log(sql);
  return sql;
}

class mainController {
  async getData(req, res) {
    let { sortBy, sortType, filterColumn, filterCondition, filterValue } = req.query;

    let sql = `SELECT * FROM items ${createWhereClause(
      filterColumn,
      filterCondition,
      filterValue,
    )} ${createSortClause(sortBy, sortType)}`;

    console.log(sql);

    let result = await pool.query(sql);

    res.status(200).json({ res: result.rows });
  }
}

module.exports = new mainController();
