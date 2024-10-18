document.querySelector('.send').addEventListener('click', function(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById('email');
    const errorIcon = document.querySelector('.error');
    const errorMsg = document.querySelector('.smal');
    const succeedMessage = document.querySelector('.succeed');
    const mainContent = document.querySelector('main'); // المحتوى الرئيسي

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // نمط البريد الإلكتروني الصحيح
    
    if (emailPattern.test(emailInput.value)) {
        // إخفاء الخطأ
        errorIcon.style.display = 'none';
        errorMsg.style.display = 'none';
        
        // إخفاء المحتوى الأصلي
        mainContent.style.display = 'none';
        
        // إظهار رسالة النجاح
        succeedMessage.style.display = 'block';
    } else {
        // إظهار الخطأ
        errorIcon.style.display = 'block';
        errorMsg.style.display = 'block';
        
        // إخفاء رسالة النجاح
        succeedMessage.style.display = 'none';
    }
});
