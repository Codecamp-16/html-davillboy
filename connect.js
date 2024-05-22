const { Sequelize } = require('sequelize'); // นำเข้า Sequelize

// สร้าง instance ของ Sequelize และเชื่อมต่อกับฐานข้อมูล
const sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

const connectDB = async () => {
  try {
    await sequelize.authenticate(); // ตรวจสอบการเชื่อมต่อกับฐานข้อมูล
    console.log('MySQL connected'); // แสดงข้อความเมื่อเชื่อมต่อสำเร็จ
  } catch (err) {
    console.error(err.message); // แสดงข้อความเมื่อเกิดข้อผิดพลาด
    process.exit(1); // ออกจากโปรเซสด้วยสถานะล้มเหลว
  }
};

module.exports = connectDB; // ส่งออกฟังก์ชัน connect
module.exports.sequelize = sequelize; // ส่งออก instance ของ sequelize
