class Solution:
    def num_islands(self, grid: list[list[str]]) -> int:
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid)):
                if grid[i + 1][j] == 0 and grid[i - 1][j] == 0 and grid[i][j + 1] == 0 and grid[i][j - 1] == 0:
                    count += 1
        return count


grid1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]
grid2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]
solution = Solution()
print(solution.num_islands(grid1))
