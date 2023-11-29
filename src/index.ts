// КУРС

interface Course {
  study(): void;
}

// КОНКРЕТНЫЕ КУРСЫ

class MathCourse implements Course {
  study(): void {
    console.log('You are studying math!');
  }
}

class AICourse implements Course {
  study(): void {
    console.log('You are studying AI!');
  }
}

class BioCourse implements Course {
  study(): void {
    console.log('You are studying biology!');
  }
}

// УНИВЕР (ФАБРИКА)

interface University {
  createMathCourse(): Course;
  createAICourse(): Course;
  createBioCourse(): Course;
}

// КОНКРЕТНЫЕ УНИВЕРЫ

class RUT implements University {
  createMathCourse(): Course {
    return new MathCourse();
  }
  createAICourse(): Course {
    return new AICourse();
  }
  createBioCourse(): Course {
    return new BioCourse();
  }
}

class MSU implements University {
  createMathCourse(): Course {
    return new MathCourse();
  }
  createAICourse(): Course {
    return new AICourse();
  }
  createBioCourse(): Course {
    return new BioCourse();
  }
}

// Создание курсов через конкретные универы

// создание универа

const rutFactory = new RUT();
const msuFactory = new MSU();

// создание курсов

const rutMathCourse = rutFactory.createMathCourse();
const rutAICourse = rutFactory.createAICourse();
const rutBioCourse = rutFactory.createBioCourse();

const msuMathCourse = msuFactory.createMathCourse();
const msuAICourse = msuFactory.createAICourse();
const msuBioCourse = msuFactory.createBioCourse();

// поступление на курсы

// в МИИТ

console.log('RUT!');

rutMathCourse.study();
rutAICourse.study();
rutBioCourse.study();

// в МГУ

console.log('MSU!');

msuMathCourse.study();
msuAICourse.study();
msuBioCourse.study();
