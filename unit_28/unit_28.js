 // Task 1
 // Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

class Goods {
    constructor(name, amount, image, count, out){
        this.name = name;
        this.amount = amount;
        this.out = out;
         //Task 2.
        //  Добавьте в класс Goods свойства image и count - картинка и количество на складе.
        this.image = image;
        this.count = count;
    }
//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).
    draw(){
        document.querySelector(this.out).innerHTML = `<img class = "block" src="img/${this.image}"><p>${this.name}</p><p>${this.amount}</p>`;
    }

}
let goods = new Goods('MacBook', '5');
// console.log(goods);
 // Task 4.
 // Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.
let goods2 = new Goods('MacBook', '120', '1.png', '10', '.out-4');
goods2.draw();

 //Task 5.
 // Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods2 extends Goods{
    constructor(name, amount, image, count, out, sale){
        super(name, amount, image, count, out);
        this.sale = sale;
    }

    draw(){
        if(this.sale){
            document.querySelector(this.out).innerHTML = `<img class = "block" src="img/${this.image}"><p>${this.name}</p><p>${this.amount}</p><hr><p>Rasprodaja<p/>`;
        } else {
            document.querySelector(this.out).innerHTML = `<img class = "block" src="img/${this.image}"><p>${this.name}</p><p>${this.amount}</p>`;
        }
        
    }
} 
 // Task 6.
 // Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.
    let goods3 = new Goods2('Asus','98','2.png','10','.out-6', true);
    goods3.draw();

 // Task 7.
 // Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

class Valid {
    constructor(name, email, password, isValid = false){
        this.name = name;
        this.email = email;
        this.password = password;
        this.isValid = isValid;
    }

    validate(){
        if(this.password.length >= 6){
            this.isValid = true;
        }
    }
}
 //Task 8.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.
    let check = new Valid('name1','asd@mail.ru', '12345');
    check.validate();
    console.log(check.isValid);

 //Task 9.
 // Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.
  let check2 = new Valid('name567','asd@mail.ru','1234567');
  check2.validate();
  console.log(check2.isValid);
 
//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emailError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.
  class Valid2 extends Valid {
    constructor(name, email, password, isValid = false, emailError = '', passwordError = ''){
        super(name, email, password, isValid = false);
        this.emailError = emailError;
        this.passwordError = passwordError;
    }

    validate(){
        if(this.password.length >= 6 && this.email != ' '){
            this.isValid = true;
        }

        if(this.email == ' '){ this.emailError = 'email empty'; }
        if(this.password.length < 6){ this.passwordError = 'min length 6' }
    }
}

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = new Valid2('name',' ', '123456789');
valid2.validate();
console.log(valid2);

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.
let valid3 = new Valid2('name','asd@mail.ru','123456789');
valid3.validate();
console.log(valid3);