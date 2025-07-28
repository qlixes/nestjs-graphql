import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { UserModule } from './user/user.module';
import { Date, DateTime } from 'graphql-scalars/typings/typeDefs';
import { PrismaService } from 'prisma.service';

@Module({
    providers: [PrismaService],
    imports: [
        GraphQLModule.forRoot<MercuriusDriverConfig>({
            driver: MercuriusDriver,
            graphiql: true,
            subscription: true,
            autoSchemaFile: "schema.gql",
        }),
        UserModule,
    ],
    exports: [PrismaService],
})
export class AppModule { }
