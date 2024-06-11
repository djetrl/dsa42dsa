import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database/database.service';

type User = {
  name: string;
  surname: string;
  age: number;
  gender: 'Мужской' | 'Женский';
  problems: boolean;
};

@Injectable()
export class AppService {
  constructor(private readonly dataBaseService: DatabaseService) {}

  getHello(): string {
    return 'Hello World!';
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private generateRandomUser(): User {
    const names: string[] = [
      'Алексей',
      'Иван',
      'Мария',
      'Ольга',
      'Сергей',
      'Дмитрий',
      'Елена',
      'Анна',
    ];
    const surnames: string[] = [
      'Иванов',
      'Петров',
      'Сидоров',
      'Кузнецов',
      'Смирнов',
      'Попов',
      'Васильев',
      'Михайлов',
    ];
    return {
      name: this.getRandomElement(names),
      surname: this.getRandomElement(surnames),
      age: Math.floor(Math.random() * (80 - 18 + 1)) + 18,
      gender: this.getRandomElement(['Мужской', 'Женский']),
      problems: Math.random() > 0.5,
    };
  }

  async problemSolution() {
    try {
      const usersToModify = await this.dataBaseService.user.findMany({
        where: {
          problems: true,
        },
      });

      for (const user of usersToModify) {
        await this.dataBaseService.user.update({
          where: { id: user.id },
          data: {
            problems: false,
          },
        });
      }
      console.log('Изменения сохранены успешно');
      return {
        status: 'success',
        message: `было найдено пользователей с проблемами: ${usersToModify.length}`,
        detail: usersToModify
      };
    } catch (error) {
      console.error('Произошла ошибка:', error);
      throw error; 
    }
  }

  async createTestUser(countUser: number) {
    try {
      const users: User[] = Array.from({ length: countUser }, () =>
        this.generateRandomUser(),
      );

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const newUser = await this.dataBaseService.user.createMany({
        data: users,
      });

      return {
        status: 'success',
        message: users,
      };
    } catch (error) {
      console.error(
        'Произошла ошибка при создании тестовых пользователей:',
        error,
      );
      throw error; 
    }
  }
}
