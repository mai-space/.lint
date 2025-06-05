<?php

declare(strict_types = 1);

namespace Vendor\Example;

class LintTest
{
    /**
     * Returns a simple greeting.
     */
    public function greet(string $name): string
    {
        if (empty($name)) {
            return 'Hello, World!';
        }

        return sprintf('Hello, %s!', $name);
    }

    /**
     * Returns the sum of two numbers.
     */
    public function add(int $a, int $b): int
    {
        return $a + $b;
    }
}
