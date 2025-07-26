import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius';
import { DateScalar } from './scalars/datetime.scalar';

@Module({
    providers: [DateScalar],
    imports: [
        GraphQLModule.forRoot<MercuriusDriverConfig>({
            driver: MercuriusDriver,
            graphiql: false,
            subscription: true,
            autoSchemaFile: "schema.gql",
        }),
    ],
})
export class AppModule { }
