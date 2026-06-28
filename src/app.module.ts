import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './modules/roles/roles.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ElectrodomesticosModule } from './modules/electrodomesticos/electrodomesticos.module';
import { DiagnosticosModule } from './modules/diagnosticos/diagnosticos.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5437,
      username: 'postgres',
      password: 'postgresql',
      database: 'dbTornillo',
      entities: [__dirname + '/modules/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    RolesModule,
    UsuariosModule,
    ElectrodomesticosModule,
    DiagnosticosModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}