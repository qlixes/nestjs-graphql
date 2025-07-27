import { CustomScalar, Scalar } from "@nestjs/graphql";
import { ValueNode } from "graphql";

@Scalar("Date", type => Date)
export class DateScalar implements CustomScalar<number, Date> {
    parseValue(value: number): Date {
        return new Date(value);
    }

    serialize(value: Date): number {
        return value.getTime();
    }

    parseLiteral(ast: ValueNode): Date {
        return new Date(ast.value);
    }
}

