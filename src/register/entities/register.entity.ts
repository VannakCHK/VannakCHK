import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class RegisterEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ nullable: true })
    password: string;
}
