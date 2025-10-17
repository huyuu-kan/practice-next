// dotenv を使って `.env` ファイルから環境変数を読み込みます。
// このプロジェクトではデータベース接続文字列を環境変数 `DATABASE_URL` で管理しています。
import {config} from 'dotenv'
// Drizzle ORM の Postgres 用アダプタを使って ORM オブジェクトを作成します。
import {drizzle} from 'drizzle-orm/postgres-js'
// 極めて軽量な postgres クライアントライブラリ (node-postgres の代替)
import postgres from 'postgres'
import * as authSchema from './schemas/auth'

// .env ファイルを読み込む (プロジェクトルートにある `.env` を想定)
config({path: '.env'});

// `postgres` によるクライアントを作成します。
// process.env.DATABASE_URL には接続文字列 (例: postgres://user:pass@host:5432/dbname) が入る想定です。
// 非 null アサーション (!) はリンターで禁止されている場合があるため、ここでは明示的なランタイムチェックを行い、
// 値が無ければ例外を投げて早期に分かりやすいエラーにします。
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
	throw new Error('環境変数 DATABASE_URL が設定されていません。`.env` を確認してください。');
}
const client = postgres(databaseUrl);

// drizzle に postgres クライアントを渡して `db` を作成します。
// この `db` を通じて型安全なクエリやスキーマ操作を行います。
export const db = drizzle({
    client,
    schema: {
        ...authSchema,
    },
});