export enum InvoiceStatus {
  None = "none",
  Invoice = "invoice",
  Paid = "paid"
}

export type Date = any;
import { GraphQLResolveInfo, GraphQLScalarTypeConfig } from "graphql";

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  Context = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

type Maybe<T> = T | null | undefined;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    getUser?: GetUserResolver<User | null, TypeParent, Context>;

    getProjectsByUserId?: GetProjectsByUserIdResolver<
      Project[],
      TypeParent,
      Context
    >;

    token?: TokenResolver<string, TypeParent, Context>;

    userId?: UserIdResolver<string | null, TypeParent, Context>;
  }

  export type GetUserResolver<
    R = User | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetUserArgs>;
  export interface GetUserArgs {
    id: string;
  }

  export type GetProjectsByUserIdResolver<
    R = Project[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, GetProjectsByUserIdArgs>;
  export interface GetProjectsByUserIdArgs {
    userId: string;
  }

  export type TokenResolver<R = string, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type UserIdResolver<
    R = string | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>;

    firstName?: FirstNameResolver<string, TypeParent, Context>;

    lastName?: LastNameResolver<string, TypeParent, Context>;

    email?: EmailResolver<string, TypeParent, Context>;

    password?: PasswordResolver<string, TypeParent, Context>;

    projects?: ProjectsResolver<Project[] | null, TypeParent, Context>;

    expenses?: ExpensesResolver<Expense[] | null, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PasswordResolver<
    R = string,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ProjectsResolver<
    R = Project[] | null,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ExpensesResolver<
    R = Expense[] | null,
    Parent = User,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ProjectResolvers {
  export interface Resolvers<Context = {}, TypeParent = Project> {
    id?: IdResolver<string, TypeParent, Context>;

    invoiceNumber?: InvoiceNumberResolver<string, TypeParent, Context>;

    invoiceDate?: InvoiceDateResolver<string | null, TypeParent, Context>;

    name?: NameResolver<string, TypeParent, Context>;

    date?: DateResolver<Date | null, TypeParent, Context>;

    streetAddress?: StreetAddressResolver<string | null, TypeParent, Context>;

    city?: CityResolver<string | null, TypeParent, Context>;

    link?: LinkResolver<string | null, TypeParent, Context>;

    status?: StatusResolver<InvoiceStatus | null, TypeParent, Context>;

    contactPerson?: ContactPersonResolver<
      ContactPerson | null,
      TypeParent,
      Context
    >;

    user?: UserResolver<string, TypeParent, Context>;

    expenses?: ExpensesResolver<ExpenseAndIncome[] | null, TypeParent, Context>;

    incomes?: IncomesResolver<ExpenseAndIncome[] | null, TypeParent, Context>;
  }

  export type IdResolver<R = string, Parent = Project, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >;
  export type InvoiceNumberResolver<
    R = string,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type InvoiceDateResolver<
    R = string | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type NameResolver<
    R = string,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateResolver<
    R = Date | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StreetAddressResolver<
    R = string | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type CityResolver<
    R = string | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LinkResolver<
    R = string | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type StatusResolver<
    R = InvoiceStatus | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ContactPersonResolver<
    R = ContactPerson | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = string,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type ExpensesResolver<
    R = ExpenseAndIncome[] | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type IncomesResolver<
    R = ExpenseAndIncome[] | null,
    Parent = Project,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ContactPersonResolvers {
  export interface Resolvers<Context = {}, TypeParent = ContactPerson> {
    firstName?: FirstNameResolver<string | null, TypeParent, Context>;

    lastName?: LastNameResolver<string | null, TypeParent, Context>;

    email?: EmailResolver<string | null, TypeParent, Context>;

    phone?: PhoneResolver<string | null, TypeParent, Context>;

    link?: LinkResolver<string | null, TypeParent, Context>;
  }

  export type FirstNameResolver<
    R = string | null,
    Parent = ContactPerson,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LastNameResolver<
    R = string | null,
    Parent = ContactPerson,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type EmailResolver<
    R = string | null,
    Parent = ContactPerson,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PhoneResolver<
    R = string | null,
    Parent = ContactPerson,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type LinkResolver<
    R = string | null,
    Parent = ContactPerson,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ExpenseAndIncomeResolvers {
  export interface Resolvers<Context = {}, TypeParent = ExpenseAndIncome> {
    name?: NameResolver<string, TypeParent, Context>;

    price?: PriceResolver<number, TypeParent, Context>;

    quantity?: QuantityResolver<number, TypeParent, Context>;

    taxRate?: TaxRateResolver<number, TypeParent, Context>;
  }

  export type NameResolver<
    R = string,
    Parent = ExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = number,
    Parent = ExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number,
    Parent = ExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TaxRateResolver<
    R = number,
    Parent = ExpenseAndIncome,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace ExpenseResolvers {
  export interface Resolvers<Context = {}, TypeParent = Expense> {
    name?: NameResolver<string | null, TypeParent, Context>;

    price?: PriceResolver<number | null, TypeParent, Context>;

    quantity?: QuantityResolver<number | null, TypeParent, Context>;

    taxRate?: TaxRateResolver<number | null, TypeParent, Context>;

    date?: DateResolver<string | null, TypeParent, Context>;

    user?: UserResolver<User | null, TypeParent, Context>;
  }

  export type NameResolver<
    R = string | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type PriceResolver<
    R = number | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type QuantityResolver<
    R = number | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TaxRateResolver<
    R = number | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type DateResolver<
    R = string | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type UserResolver<
    R = User | null,
    Parent = Expense,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    registerUser?: RegisterUserResolver<RegisterResponse, TypeParent, Context>;

    loginUser?: LoginUserResolver<RegisterResponse, TypeParent, Context>;

    logout?: LogoutResolver<string | null, TypeParent, Context>;
  }

  export type RegisterUserResolver<
    R = RegisterResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, RegisterUserArgs>;
  export interface RegisterUserArgs {
    firstName: string;

    lastName: string;

    email: string;

    password: string;
  }

  export type LoginUserResolver<
    R = RegisterResponse,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, LoginUserArgs>;
  export interface LoginUserArgs {
    email: string;

    password: string;
  }

  export type LogoutResolver<
    R = string | null,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context>;
}

export namespace RegisterResponseResolvers {
  export interface Resolvers<Context = {}, TypeParent = RegisterResponse> {
    success?: SuccessResolver<boolean, TypeParent, Context>;

    message?: MessageResolver<string | null, TypeParent, Context>;

    token?: TokenResolver<string, TypeParent, Context>;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = RegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type MessageResolver<
    R = string | null,
    Parent = RegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
  export type TokenResolver<
    R = string,
    Parent = RegisterResponse,
    Context = {}
  > = Resolver<R, Parent, Context>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  {}
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  {}
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string | null;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}