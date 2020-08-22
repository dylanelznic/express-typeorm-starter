import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class User {
  /** The id of the User */
  @PrimaryGeneratedColumn()
  id: string;

  /** The name of the user */
  @Column()
  name: string;
}

export default User;
