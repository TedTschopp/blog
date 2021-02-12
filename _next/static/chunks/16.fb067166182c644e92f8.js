(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{xvyz:function(t){t.exports=JSON.parse('{"filename":"2020/sql-libs-for-typescript.md","frontmatter":{"csl":"../ieee-with-url.csl","date":"2020-06-27","hidden":true,"references":[],"title":"An overview of SQL libraries for TypeScript","url2cite-link-output":"sup"},"preview":"Using relational databases in a typed language is a pain unless you have great libraries to support you. There\u2019s a lot of different libraries for TypeScript, but they all have their own advantages and flaws. Since it\u2019s hard to find anything other than TypeORM, this is an overview of the","content_ast":[{"t":"Para","c":[{"t":"Str","c":"Using relational databases in a typed language is a pain unless you have great libraries to support you. There\u2019s a lot of different libraries for TypeScript, but they all have their own advantages and flaws. Since it\u2019s hard to find anything other than TypeORM, this is an overview of the possibilities."}]},{"t":"Para","c":[{"t":"Str","c":"This is complete overview of SQL libraries for TypeScript. If I\u2019m missing a library, please let me know."}]},{"t":"Header","c":[2,["object-relation-mappers-orms",[],[]],[{"t":"Str","c":"Object Relation Mappers (ORMs)"}]]},{"t":"Para","c":[{"t":"Str","c":"In an ORM you declare the schema completely in the host language (TypeScript). The ORM then completely manages synchronization between your objects / classes and the corresponding database tables."}]},{"t":"Para","c":[{"t":"Str","c":"I\u2019m not a huge fan of ORMs since they always have the same issues: If you have somewhat complex queries, you will get to the limit of the ORM and not be able to represent that query in it without escape hatching. You also lose direct control over how the queries are handled, and thus may get surprising performance issues when the ORM uses suboptimal SQL queries in the background."}]},{"t":"BulletList","c":[[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/typeorm/typeorm"}],["https://github.com/typeorm/typeorm",""]]}]},{"t":"Para","c":[{"t":"Str","c":"By far the most popular solution."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/mikro-orm/mikro-orm"}],["https://github.com/mikro-orm/mikro-orm",""]]}]},{"t":"Para","c":[{"t":"Str","c":"Seems pretty nice. There\u2019s a comparison between the two "},{"t":"Link","c":[["",[],[]],[{"t":"Str","c":"here"}],["https://github.com/mikro-orm/mikro-orm/issues/12",""]]}]}]]},{"t":"Header","c":[2,["query-builder-orm-combinations",[],[]],[{"t":"Str","c":"Query Builder / ORM combinations"}]]},{"t":"Para","c":[{"t":"Str","c":"These all connect to a dev instance of the database at compile time or in a preprocessing step to figure out the database schema and create the TypeScript types and/or code for it."}]},{"t":"BulletList","c":[[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/prisma/prisma"}],["https://github.com/prisma/prisma",""]]}]},{"t":"Para","c":[{"t":"Str","c":"A mix of a query builder and an ORM. Schemas are extracted from a dev instance of the database, which then generates TypeScript code to interact with the database. Very good docs, well thought out."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/jawj/zapatos"}],["https://github.com/jawj/zapatos",""]]}]},{"t":"Para","c":[{"t":"Str","c":"Schemas are extracted from a dev instance of the database. Simple queries (Select, update, insert, each with simple joins) are fully typed with a query-builder like interface. More complex queries are done with raw SQL by manually connecting the schema types with the queries. PostgreSQL only."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/adelsz/pgtyped"}],["https://github.com/adelsz/pgtyped",""]]}]},{"t":"Para","c":[{"t":"Str","c":"Reads raw SQL queries, and figures out the TypeScript input and return types for them by connecting to a dev instance of the database and asking it to interpret the query. Thus it is very flexible while still being statically typed. PostgreSQL only."}]}]]},{"t":"Header","c":[2,["fully-typed-query-builders",[],[]],[{"t":"Str","c":"Fully Typed Query builders"}]]},{"t":"Para","c":[{"t":"Str","c":"For these you declare your tables in TypeScript, and write your queries in TypeScript in a way that is as similar as possible to raw SQL."}]},{"t":"Para","c":[{"t":"Str","c":"The library is then able to (ab)use the TypeScript type system to infer the return types of any type of complex query."}]},{"t":"Para","c":[{"t":"Str","c":"All of these have performance issues and regression issues, since the TS compiler is not optimized for very complex operations, and TS is not backwards compatible, so these libraries often break when a new TS version is released."}]},{"t":"BulletList","c":[[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/phiresky/ts-typed-sql"}],["https://github.com/phiresky/ts-typed-sql",""]]}]},{"t":"Para","c":[{"t":"Str","c":"Works well, but unmaintained, missing features, and broken in TypeScript 3.8."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/AnyhowStep/tsql"}],["https://github.com/AnyhowStep/tsql",""]]}]},{"t":"Para","c":[{"t":"Str","c":"Probably the most well thought out, but incomplete."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/Ff00ff/mammoth"}],["https://github.com/Ff00ff/mammoth",""]]}]},{"t":"Para","c":[{"t":"Str","c":"The most production ready, but limited to PostgreSQL."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/travigd/vulcyn"}],["https://github.com/travigd/vulcyn",""]]}]},{"t":"Para","c":[{"t":"Str","c":"PostgreSQL only, incomplete."}]}],[{"t":"Para","c":[{"t":"Link","c":[["",["auto-linked"],[]],[{"t":"Str","c":"https://github.com/hoeck/typesafe-query-builder"}],["https://github.com/hoeck/typesafe-query-builder",""]]}]},{"t":"Para","c":[{"t":"Str","c":"PostgreSQL only, looks good but did not try."}]}]]}]}')}}]);