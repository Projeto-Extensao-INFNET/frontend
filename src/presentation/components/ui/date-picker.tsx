import { useState, type FC } from 'react';
import { Button } from '@presentation/components/ui/button';
import { Calendar } from '@presentation/components/ui/calendar';
import { Form } from '@/presentation/components/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@presentation/components/ui/popover';

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
}

export const DatePicker: FC<DatePickerProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <Form.Field className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="justify-start font-normal"
          >
            {value ? value.toLocaleDateString() : 'Select date'}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={value}
            defaultMonth={value}
            captionLayout="dropdown"
            onSelect={(date) => {
              onChange?.(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </Form.Field>
  );
};
