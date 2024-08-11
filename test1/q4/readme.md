```
/**
Can you explain about Interface and Enum, and where will you be using,
please make some examples.
**/
```

# Interface (介面)
## 定義與用法
Interface 是一種用來定義物件結構的方式。它用來描述物件的形狀，確保物件符合某種特定的結構或協議。

## 使用場合
定義函數或物件的參數結構。
強制類必須實現某些方法或屬性。
描述 API 返回的數據結構。

## 範例
```typescript
// 定義一個用戶介面
interface User {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string;
}

// 使用介面的物件
const user: User = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// 顯示用戶全名
console.log(user.getFullName());
```

## 類別實現介面
介面也可以用來限制類別的結構，強制類別必須實現介面中定義的所有屬性和方法。

```typescript
interface Vehicle {
    brand: string;
    speed: number;
    drive(): void;
}

class Car implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number) {
        this.brand = brand;
        this.speed = speed;
    }

    drive() {
        console.log(`${this.brand} is driving at ${this.speed} km/h.`);
    }
}

const myCar = new Car('Toyota', 120);
myCar.drive();
```

# Enum (列舉)
## 定義與用法
Enum 用於定義一組命名常量，可以使代碼更具可讀性和可維護性。它通常用於描述一組相關值，例如一周中的天數或方向。

## 使用場合
定義一組相關常量，如狀態碼、方向、事件類型等。
替代多個字面量字串或數字的使用，提高代碼的可讀性。

## 範例
```typescript
// 定義一個方向的列舉
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 使用枚舉
function move(direction: Direction) {
    switch (direction) {
        case Direction.Up:
            console.log('Moving up');
            break;
        case Direction.Down:
            console.log('Moving down');
            break;
        case Direction.Left:
            console.log('Moving left');
            break;
        case Direction.Right:
            console.log('Moving right');
            break;
    }
}

move(Direction.Left); // Moving left
```

## 字串枚舉
TypeScript 也支持字串枚舉：

```typescript

enum Status {
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Pending = "PENDING"
}

function updateStatus(status: Status) {
    console.log(`The status is ${status}.`);
}

updateStatus(Status.Active); // The status is ACTIVE.
```
## 使用時機
* interface：用於設計複雜的數據結構和強制類別結構，適合需要確保物件和類別有一定約束的情況。
* enum：用於定義一組命名常量，讓代碼更具可讀性，特別是在處理一組固定的相關值時。