/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty({message: 'Title is required.'})
    @IsString({message: 'Title needs to be name.'})
    title: string;

    @IsNotEmpty({message: 'description is required.'})
    @IsString({message: 'description needs to be description.'})
    description: string;

    @IsNotEmpty({message: 'barcode is required.'})
    @IsString({message: 'barcode needs to be barcode.'})
    bar_code: string;
}
