import { Injectable, Inject, Body } from '@nestjs/common';
import { ResultDTO } from 'src/DTOresult/result.dto';
import { Repository } from 'typeorm';
import { userRegisterDTO } from './DTO/user.register.dto';
import { User } from './userRegister.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async registerUser(data: userRegisterDTO): Promise<ResultDTO>{
    let user = new User()
    user.name_user = data.name
    user.email_user = data.email
    user.password_user = bcrypt.hashSync(data.password, 8)
    return this.userRepository.save(user)
    .then((result) => {
        return <ResultDTO> {
            status: true,
            mensage: "user registered successfully"
        }
    })
    .catch((error) => {
        return <ResultDTO> {
            status: false,
            mensage: error
        }
    })
  }

  async findOne(email: string): Promise<User> {
      return this.userRepository.findOne({ where: {email_user:email} })
  }
}