CREATE TABLE [dbo].[Desk]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [DeskTime] DATETIME NULL, 
    [TotalPlayer] INT NULL, 
    [TotalCoin] DECIMAL NULL, 
    [MaxWin] DECIMAL NULL, 
    [MaxLose] DECIMAL NULL, 
    [Status] INT NULL
)
