# Software Testing Final Exam

ชื่อ-นามสกุล: วิมลสิรี เกวี  
รหัสนักศึกษา: 6804101385  

---

## รายละเอียด Integration Testing

### ข้อ IT-01: Top-Down Integration Testing with Stub
- **ส่วนที่เป็น Real:** ทำการ Login ผ่านหน้าเว็บจริง (`https://www.saucedemo.com/`) เพื่อรับ Session Cookie และเข้าสู่หน้า `inventory.html`
- **ส่วนที่เป็น Stub:** ใช้คำสั่ง `page.setContent()` เพื่อจำลอง DOM บนเบราว์เซอร์สำหรับแสดงรายการสินค้า Stub (`Mock Inventory Ready`, `Mock Backpack`, `Mock Bike Light`) แทนการโหลดองค์ประกอบจริงของ SauceDemo

### ข้อ IT-02: Bottom-Up Integration Testing with Driver
- **ส่วนที่เป็น Driver:** ฟังก์ชัน `driverOpenInventory()` ทำหน้าที่กำหนด Cookie (`session-username=standard_user`) บน `BrowserContext` ล่วงหน้า เพื่อข้ามขั้นตอนการกรอกฟอร์ม Login และสั่งเปิดหน้า `inventory.html` โดยตรง
- **ส่วนที่เป็น Real:** หน้า Inventory จริง รายการสินค้าจริงทั้ง 6 ชิ้น และการทำงานของ Shopping Cart จริง