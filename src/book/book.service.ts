/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateBookDto) {// o nome data e obrigatorio no prisma
    const bookExists = await this.prisma.book.findFirst({
      where: {
      bar_code: data.bar_code,
      }
    });

    if(bookExists) {
      throw new Error('Book already exists');
    }

    const book = await this.prisma.book.create({
      data,
    });
    return book;
  }

  async findAll() {
    return this.prisma.book.findMany();
  }

  async findOne(id: string) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if(!bookExists) {
      throw new Error('Book does not exists ');
    }
    return bookExists;
  }

  async update(id: string, data: UpdateBookDto) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if(!bookExists) {
      throw new Error('Book does not exists')
    }

    return await this.prisma.book.update({
      data,
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    const bookExists = await this.prisma.book.findUnique({
      where: {
        id,
      },
    });

    if(!bookExists) {
      throw new Error('Book does not exists');
    }

    return await this.prisma.book.delete({
      where: {
        id,
      }
    });
  }
}
