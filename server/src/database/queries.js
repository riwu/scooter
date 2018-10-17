const mysql = require('promise-mysql');

const conn = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: 'scooter',
  port: process.env.MYSQL_PORT,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = {
  getScooters: info => conn
    .query(
      `SELECT * FROM scooter WHERE 
       ST_Distance_Sphere(scooter.position, POINT(?, ?)) <= ? ORDER BY ST_Distance_Sphere(scooter.position, POINT(?, ?)) LIMIT ?`,
      [info.lng, info.lat, info.within, info.lng, info.lat, Number(info.count)],
    )
    .map(scooter => ({
      ...scooter,
      position: { lng: scooter.position.x, lat: scooter.position.y },
    })),
};
