// Khởi tạo mảng ban đầu gồm 3 phiếu mượn sách
let borrowRecords = [
  { recordId: 'PM01', studentId: 'SV101', bookTitle: 'JavaScript Nang Cao', borrowDays: 10, isReturned: false },
  { recordId: 'PM02', studentId: 'SV102', bookTitle: 'Cau Truc Du Lieu & Giai Thuat', borrowDays: 16, isReturned: false },
  { recordId: 'PM03', studentId: 'SV103', bookTitle: 'Co So Du Lieu Nang Cao', borrowDays: 20, isReturned: false }
];

console.log('=== 1. DANH SACH PHIEU MUON BAN DAU ===');
console.table(borrowRecords);

// Create: Thêm phiếu mượn mới (PM04)
borrowRecords.push({
  recordId: 'PM04',
  studentId: 'SV104',
  bookTitle: 'Clean Code',
  borrowDays: 18,
  isReturned: false
});
console.log('=== 2. SAU KHI THEM PHIEU PM04 ===');
console.table(borrowRecords);

// Read & Tinh phi phat: Duyệt mảng tính tiền phạt cho các phiếu quá hạn (> 14 ngày)
console.log('=== 3. TINH PHI PHAT QUA HAN (> 14 ngay) ===');
for (let i = 0; i < borrowRecords.length; i++) {
  let record = borrowRecords[i];
  if (record.borrowDays > 14) {
    let overdueDays = record.borrowDays - 14;
    let fine = overdueDays * 5000;
    console.log(`Phiếu ${record.recordId} (${record.bookTitle}): Quá hạn ${overdueDays} ngày -> Tiền phạt: ${fine} VNĐ`);
  } else {
    console.log(`Phiếu ${record.recordId} (${record.bookTitle}): Không bị quá hạn.`);
  }
}

// Update: Cập nhật isReturned = true cho phiếu PM01 khi trả sách
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === 'PM01') {
    borrowRecords[i].isReturned = true;
    break;
  }
}
console.log('=== 4. SAU KHI CAP NHAT PM01 DA TRA SACH ===');
console.table(borrowRecords);

// Delete: Xóa phiếu PM03 khỏi danh sách sau khi tất toán
let deleteIndex = -1;
for (let i = 0; i < borrowRecords.length; i++) {
  if (borrowRecords[i].recordId === 'PM03') {
    deleteIndex = i;
    break;
  }
}

if (deleteIndex !== -1) {
  borrowRecords.splice(deleteIndex, 1);
}

console.log('=== 5. DANH SACH CUOI CUNG SAU KHI XOA PM03 ===');
console.table(borrowRecords);