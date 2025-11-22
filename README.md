# NestJS TODO APP 仕様書

## 概要
NestJSを使用したTODOアプリケーションのCRUD機能実装

## 要件

CRUD機能を実装する

- **C (Create)**: タスクの作成
- **R (Read)**: 作成済みタスクの一覧読み込み
- **U (Update)**: 作成済みタスクの修正
- **D (Delete)**: 作成済みタスクの削除

---

## 機能詳細

### Create - TODOタスクの作成

#### タスク要件

| 項目 | 型 | 説明 |
|------|------|------|
| タスク名 | `string` | タスクの名称 |
| 開始日時 | `Date` | タスクの開始日時 |
| 終了日時 | `Date` | タスクの終了日時 |
| タスクの内容 | `string` | タスクの詳細内容 |

#### 仕様
- 作成したタスクはデータベースに保存する
- 作成時にタスクID（UUID）を自動生成してDBに登録する

### ファイル構成

```
src/
├── app.module.ts
├── app.controller.ts
├── app.service.ts
├── main.ts
├── prisma/
│   ├── prisma.module.ts
│   └── prisma.service.ts
├── repositories/
│   ├── repository.module.ts
│   └── task.repository.ts
├── modules/
│   ├── create/
│   │   ├── create.module.ts
│   │   ├── create.controller.ts
│   │   ├── create.service.ts
│   │   └── dto/
│   │       └── create-task.dto.ts
│   ├── read/
│   │   ├── read.module.ts
│   │   ├── read.controller.ts
│   │   └── read.service.ts
│   ├── update/
│   │   ├── update.module.ts
│   │   ├── update.controller.ts
│   │   ├── update.service.ts
│   │   └── dto/
│   │       └── update-task.dto.ts
│   └── delete/
│       ├── delete.module.ts
│       ├── delete.controller.ts
│       └── delete.service.ts
├── prisma/
│   ├── schema.prisma
│   └── migrations/
└── test/
```

## アーキテクチャ

### モジュール構成図

```mermaid
flowchart TB
    subgraph App ["AppModule"]
        direction TB
        AppController-->
        AppService
    end

    subgraph Prisma ["PrismaModule"]
        PrismaService
    end

    subgraph Repository ["RepositoryModule (Global)"]
        TaskRepository
    end

    subgraph CreateMod ["CreateModule"]
        CreateController
        CreateService
    end

    subgraph ReadMod ["ReadModule"]
        ReadController
        ReadService
    end

    subgraph UpdateMod ["UpdateModule"]
        UpdateController
        UpdateService
    end

    subgraph DeleteMod ["DeleteModule"]
        DeleteController
        DeleteService
    end

    AppService --> CreateMod
    AppService --> ReadMod
    AppService --> UpdateMod
    AppService --> DeleteMod

    TaskRepository --> PrismaService
    
    CreateService --> TaskRepository
    ReadService --> TaskRepository
    UpdateService --> TaskRepository
    DeleteService --> TaskRepository

    CreateController --> CreateService
    ReadController --> ReadService
    UpdateController --> UpdateService
    DeleteController --> DeleteService

    PrismaService --> DB[("Database")]
```

### 各層の責務

| 層 | 責務 |
|---|---|
| **Controller** | HTTPリクエストの受付、レスポンスの返却 |
| **Service** | ビジネスロジックの実装 |
| **PrismaService** | データベースアクセス |

## 技術スタック

- **Backend**: NestJS
- **Database**: SQLite (開発環境)
- **ORM**: Prisma
- **ID生成**: UUID

---
