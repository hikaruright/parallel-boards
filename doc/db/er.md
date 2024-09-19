# ER Diagram

```mermaid
erDiagram

    %% エンティティの定義

    Projects {
        int ProjectID PK
        varchar ProjectName
        text Description
        date StartDate
        date EndDate
        varchar Status
    }

    Processes {
        int ProcessID PK
        int ProjectID FK
        varchar ProcessName
        text Description
        decimal EstimatedHours  %% 作業見積（時間）
        date StartDate
        date EndDate
        varchar Status
    }

    Tasks {
        int TaskID PK
        int ProcessID FK
        varchar TaskName
        text Description
        int UserID FK
        decimal EstimatedHours
        decimal ActualHours
        date StartDate
        date EndDate
        varchar Status
    }

    Users {
        int UserID PK
        varchar Name
        varchar Department
        varchar Position
        varchar ContactInfo
    }

    TimeEntries {
        int TimeEntryID PK
        int TaskID FK
        int UserID FK
        date Date
        decimal Hours
    }

    %% リレーションシップの定義

    Projects ||--o{ Processes : "has"
    Processes ||--o{ Tasks : "has"
    Tasks }o--|| Users : "assigned to"
    Tasks ||--o{ TimeEntries : "has"
    TimeEntries }o--|| Users : "recorded by"

    %% オプション：タスクとユーザーの多対多関係（必要な場合）
    %% TaskAssignments {
    %%     int TaskAssignmentID PK
    %%     int TaskID FK
    %%     int UserID FK
    %% }

    %% Tasks ||--o{ TaskAssignments : ""
    %% Users ||--o{ TaskAssignments : ""
```