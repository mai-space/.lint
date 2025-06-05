<?php

declare(strict_types = 1);

namespace Vendor\Example;

final class LintTest
{
    /**
     * Returns a simple greeting.
     */
    public function greet(string $name): string
    {
        if ('' === $name) {
            return 'Hello, World!';
        }

        return 'Hello, ' . $name;
    }

    /**
     * Returns the sum of two numbers.
     */
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }

    /**
     * Demonstrates strict type comparison.
     */
    public function isPositive(int $value): bool
    {
        return $value > 0;
    }

    /**
     * @param array<int, mixed> $x
     *
     * @return array<int, mixed>
     */
    public function doStuff(array $x): array
    {
        return $x;
    }
}
