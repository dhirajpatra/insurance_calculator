<?php
declare(strict_types=1);

namespace Utils;

/**
 * Calculator interface
 */
interface CalculatorInterface
{
    /**
     * This method will calculate the insurance
     * 
     * @param int $value
     * @param int $tax
     * @param int $installment
     */
    public function calculate(int $value, int $tax, int $installment) : string;
}