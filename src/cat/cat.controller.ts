import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Auth } from '../auth/decorators/auth.decorator';
import { Role } from '../common/enums/rol.enum';
import { ActiveUser } from '../common/decorators/active-user.decorator';
import { UserActiveInterface } from '../common/interface/user-active.interface';

@Auth(Role.USER)
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto, @ActiveUser() user: UserActiveInterface) {
    return this.catService.create(createCatDto,user );
  }

  @Get()
  findAll(@ActiveUser() user: UserActiveInterface) {
    return this.catService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.catService.findOne(id, user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto, @ActiveUser() user: UserActiveInterface) {
    return this.catService.update(id, updateCatDto, user);
  }

  @Delete(':id')
  remove(@Param('id') id: number, @ActiveUser() user: UserActiveInterface) {
    return this.catService.remove(id, user);
  }
}
