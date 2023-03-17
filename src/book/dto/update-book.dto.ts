/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateBookDto {
    @IsNotEmpty({message: 'Title is required.'})
    @IsString({message: 'Title needs to be name.'})
    @IsOptional()
    title: string;

    @IsNotEmpty({message: 'description is required.'})
    @IsString({message: 'description needs to be description.'})
    @IsOptional()
    description: string;

    @IsNotEmpty({message: 'barcode is required.'})
    @IsString({message: 'barcode needs to be barcode.'})
    @IsOptional()
    bar_code: string;
}
