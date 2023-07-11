import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class post_data {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: number;

  @Column({ length: 255 })
  memo: string;

  @Column()
  good: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}

export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 10000, nullable: true })
  mail: string;

  @Column({ length: 10000, nullable: true })
  password: string;

  @Column({ length: 10000, nullable: true })
  PR: string;

  @Column()
  Follow: number;

  @CreateDateColumn()
  created: Date;
}

export class comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postid: number;

  @Column({ length: 10000, nullable: true })
  memo: string;

  @CreateDateColumn()
  created: Date;
}

export class FollowDB {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Follow: number;

  @Column()
  follower: number;
}
