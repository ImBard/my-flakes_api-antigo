import { Body, Controller, Get, Post, Request, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "src/auth/auth.service";
import { ResultDTO } from "src/DTOresult/result.dto";
import { userRegisterDTO } from "./DTO/user.register.dto";
import { UserService } from "./user.service";
import { User } from "./userRegister.entity";

@Controller("user")
export class UserController {
    constructor(
        private readonly userService: UserService,
        private authService: AuthService
        ) {}

    @Get()
    async list(): Promise<User[]> {
        return this.userService.findAll();
    }

    @Post("register")
    async register(@Body() data: userRegisterDTO): Promise<ResultDTO> {
        return this.userService.registerUser(data)
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
}